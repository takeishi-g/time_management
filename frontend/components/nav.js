import NavLink from './link'

const Nav = () => {
  const homePage = {
    pathname: 'ホーム',
    path: '/',
  }

  const workersPage = {
    pathname: '加工者一覧',
    path: '/workers/',
  }

  const suppliersPage = {
    pathname: '取引先一覧',
    path: '/suppliers/',
  }

  const processPage = {
    pathname: '工程一覧',
    path: '/process/',
  }

  const productsPage = {
    pathname: '図面一覧',
    path: '/products/'
  }

  return (
    <div className=' container mx-auto'>
      <div className=' flex justify-between'>
        <div>
          <NavLink {...homePage} />
        </div>
        <div className='flex'>
          <NavLink {...workersPage}/>
          <NavLink {...suppliersPage} />
          <NavLink {...processPage} />
          <NavLink {...productsPage} />
        </div>
      </div>
    </div>
  )
}

export default Nav
