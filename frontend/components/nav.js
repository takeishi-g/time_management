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

  return (
    <div className=' container mx-auto'>
      <div className=' flex justify-between'>
        <div>
          <NavLink {...homePage} />
        </div>
        <div className='flex'>
          <NavLink {...workersPage}/>
          <NavLink {...suppliersPage} />
        </div>
      </div>
    </div>
  )
}

export default Nav
