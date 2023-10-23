import Link from 'next/link';
import commonStyles from '../styles/common.module.css'
import { useRouter } from 'next/router';

const navLinks = [
  { title: '/about', link: '/' },
  { title: '/projects', link: '/projects' },
  { title: '/blog', link: '/blog' },
  { title: '/more', link: '/more' },
  { title: '/thanks', link: '/thanks' },
]

const Header = () => {
  const { pathname } = useRouter();

  function getActiveClassName(link: string) {
    if (pathname.length === 1 && link === '/') 
      return commonStyles.active;
    else if (pathname.startsWith(link) && link !== '/') 
      return commonStyles.active;
    else 
      return '';
  }

  return (
    <header className={commonStyles.header}>
      <ul className={commonStyles.navBar}>
        {navLinks.map(({ title, link }, idx) => { 
          
          const active = getActiveClassName(link);
          return (
            <li className={active} key={idx}>
              <Link href={link}>
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </header>
  )
}

export default Header;