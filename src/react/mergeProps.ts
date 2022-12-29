export default function mergeProps<PropsType>(
  componentProps: PropsType,
  defaultProps: Partial<PropsType>,
  globalComponentConfig: PropsType,
): PropsType {
  const _defaultProps = { ...defaultProps, ...globalComponentConfig };
  const props = { ...componentProps };

  for (const propName in _defaultProps) {
    if (props[propName] === undefined) {
      props[propName] = _defaultProps[propName];
    }
  }

  return props;
}
