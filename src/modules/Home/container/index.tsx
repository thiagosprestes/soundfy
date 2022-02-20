import React from 'react';
import { Container, Greeting } from './styles';
import { ComponentState } from '../../../utils/globalTypes';
import Error from '../../../components/Error';
import Loading from '../../../components/Loading';

interface HomeContainerProps {
  componentState: ComponentState;
}

const HomeContainer = ({ componentState }: HomeContainerProps) => {
  const renderDefault = <Greeting size={22}>Olá, Luke Skywalker</Greeting>;

  const renderLoading = <Loading />;

  const renderError = <Error onRetry={() => undefined} />;

  return (
    <Container>
      {
        {
          [ComponentState.default]: renderDefault,
          [ComponentState.loading]: renderLoading,
          [ComponentState.error]: renderError,
        }[componentState]
      }
    </Container>
  );
};

export default HomeContainer;
