/* eslint-disable react/prop-types */
export function Box({ id, className, selectBox }) {
  return (
    <div
      id={id}
      className={className}
      onClick={selectBox}
    />
  )
}