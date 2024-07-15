import './index.css'

const LanguageTabItem = props => {
  const {data, onChangeLanguage, isActive} = props
  const {id, buttonText} = data

  const activeClass = isActive ? 'activeTab' : null

  const onClickTab = () => {
    onChangeLanguage(id)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className={`button ${activeClass}`}
        onClick={onClickTab}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageTabItem
