import Link from 'next/link';
import commonStyles from '../styles/common.module.css'

const Header = () => {
  
  return (
    <header className={commonStyles.header}>
      <ul className={commonStyles.navBar}>
        <li><Link href="/">/about</Link></li>
        {/* <li><Link href="/blog">/blog</Link></li> */}
        <li><Link href="/projects">/projects</Link></li>
        {/* <li><Link href="/more">/more</Link></li> */}
      </ul>
    </header>
  )
}

export default Header;