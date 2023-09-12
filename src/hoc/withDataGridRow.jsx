export default function withDataGridRow(Component) {
  // eslint-disable-next-line react/prop-types
  const EnhancedComponent = ({ row }) => <Component {...row} />;

  return EnhancedComponent;
}
