import { Fragment, useState } from 'react';
import { ApiRequestAntiPattern } from './Examples/ApiRequest';
import { CopyPropsAntiPattern } from './Examples/CopyProps';
import { DerivedPropsAntiPattern } from './Examples/DerivedProps';
import { ExternalReferenceAntiPattern } from './Examples/ExternalReference';
import { ImperativeChangeAntiPattern } from './Examples/ImperativeChange';
import { ImperativeNotASideEffectAntiPattern } from './Examples/ImperativeNotASideEffect';
import { InfiniteLoopAntiPattern } from './Examples/InfinteLoop';
import { LocalOrRemoteAntiPattern } from './Examples/LocalOrRemoteProp';
import { ObjectUpdateInfiniteLoopAntiPattern } from './Examples/ObjectUpdateInfinteLoop ';

interface Props {
  firstName: string;
}

const EXAMPLES: {
  name: string;
  Component: React.FC<Props>;
}[] = [
  {
    name: 'Copying Props',
    Component: CopyPropsAntiPattern,
  },
  {
    name: 'Derived/Calculated values from Props',
    Component: DerivedPropsAntiPattern,
  },
  {
    name: 'External Reference in a component',
    Component: ExternalReferenceAntiPattern,
  },
  {
    name: 'Recursive infinite loop',
    Component: InfiniteLoopAntiPattern,
  },
  {
    name: 'Object reference infinite loop',
    Component: ObjectUpdateInfiniteLoopAntiPattern,
  },
  {
    name: 'Mix and match props',
    Component: LocalOrRemoteAntiPattern,
  },
  {
    name: 'Duplicating existing state management',
    Component: ApiRequestAntiPattern,
  },
  {
    name: 'Imperative magic',
    Component: ImperativeChangeAntiPattern,
  },
  {
    name: 'Imperative Not a Side-effect',
    Component: ImperativeNotASideEffectAntiPattern,
  },
];

const EXAMPLE_NAMES = EXAMPLES.map((example) => example.name);

export function UseEffectAntiPatterns(props: Props) {
  const [visibleComponentName, setVisibleComponentName] = useState(EXAMPLE_NAMES[0]);
  const { firstName } = props;
  const VisibleComponent = EXAMPLES.find(
    (example) => example.name === visibleComponentName
  )?.Component;
  return (
    <>
      {EXAMPLE_NAMES.map((name) => {
        const exampleIsSelected = name === visibleComponentName;
        return (
          <button
            key={name}
            type="button"
            onClick={() => setVisibleComponentName(name)}
            style={{ backgroundColor: exampleIsSelected ? 'lightgreen' : undefined, margin: 4 }}
          >
            {name}
          </button>
        );
      })}
      <div>
        {VisibleComponent && (
          <>
            <p>
              Component: <code>{VisibleComponent.name}</code>
            </p>
            <VisibleComponent firstName={firstName} />
          </>
        )}
      </div>
    </>
  );
}
