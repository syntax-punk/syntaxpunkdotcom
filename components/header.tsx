import commonStyles from '../styles/common.module.css'

const Header = () => {
  
  return (
    <header>
      <ul className={commonStyles.navBar}>
        <li>/about</li>
        <li>/blog</li>
        <li>/projects</li>
        <li>/more</li>
      </ul>
    </header>
  )
}

export default Header;