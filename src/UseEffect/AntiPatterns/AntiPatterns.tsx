import { ApiRequestAntiPattern } from './ApiRequest';
import { CopyPropsAntiPattern } from './CopyProps';
import { DerivedPropsAntiPattern } from './DerivedProps';
import { ExternalReferenceAntiPattern } from './ExternalReference';
import { InfiniteLoopAntiPattern } from './InfinteLoop';
import { LocalOrRemoteAntiPattern } from './LocalOrRemoteProp';
import { ObjectUpdateInfiniteLoopAntiPattern } from './ObjectUpdateInfinteLoop ';

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
