import { useMemo } from 'react';

export default function useMergeProps<PropsType>(
  componentProps: PropsType,
  defaultProps: Partial<PropsType>,
): PropsType {
  const _defaultProps = useMemo(() => {
    return { ...defaultProps };
  }, [defaultProps]);

  return useMemo(() => {
    const mProps = { ...componentProps };

    for (const propName in _defaultProps) {
      if (mProps[propName] === undefined) {
        // @ts-ignore
        mProps[propName] = _defaultProps[propName];
      }
    }

    return mProps;
  }, [componentProps, _defaultProps]);
}
