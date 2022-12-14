import './button.scss'

// interface ButtonType {
//   type: 'Approved' | 'Declined' | 'Pending';
// }

const Button = ({ type }) => {
  return (
    <button className={'buttonWidgetLg ' + type}>{type}</button>
  )
}

export default Button