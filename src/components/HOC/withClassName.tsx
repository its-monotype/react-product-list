import clsx from 'clsx';
import { forwardRef } from 'react';

type WithClassNameProps<P> = P & { className?: string };

export function withClassName<P extends object>(
  WrappedComponent:
    | React.ComponentType<WithClassNameProps<P>>
    | React.ForwardRefExoticComponent<WithClassNameProps<P>>,
  classes = ''
) {
  const WithClassName = forwardRef<
    React.ElementRef<typeof WrappedComponent>,
    WithClassNameProps<P>
  >((props, ref) => {
    const newProps = {
      ...props,
      ref,
      className: clsx(classes, props.className),
    };

    return <WrappedComponent {...newProps} />;
  });

  WithClassName.displayName = `WithClassName(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithClassName;
}
