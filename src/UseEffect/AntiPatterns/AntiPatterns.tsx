import { ApiRequestAntiPattern } from './Examples/ApiRequest';
import { CopyPropsAntiPattern } from './Examples/CopyProps';
import { DerivedPropsAntiPattern } from './Examples/DerivedProps';
import { ExternalReferenceAntiPattern } from './Examples/ExternalReference';
import { InfiniteLoopAntiPattern } from './Examples/InfinteLoop';
import { LocalOrRemoteAntiPattern } from './Examples/LocalOrRemoteProp';
import { ObjectUpdateInfiniteLoopAntiPattern } from './Examples/ObjectUpdateInfinteLoop ';

interface Props {
  firstName: string;
}

export function UseEffectAntiPatterns(props: Props) {
  const { firstName } = props;
  return (
    <>
      <CopyPropsAntiPattern firstName={firstName} />
      <DerivedPropsAntiPattern firstName={firstName} />
      <ExternalReferenceAntiPattern firstName={firstName} />
      <InfiniteLoopAntiPattern firstName={firstName} />
      <ObjectUpdateInfiniteLoopAntiPattern firstName={firstName} />
      <LocalOrRemoteAntiPattern firstName={firstName} />
      <ApiRequestAntiPattern firstName={firstName} />
    </>
  );
}
