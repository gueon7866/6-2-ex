import React from 'react'

 const Nav = () => {

  return (
    <nav>
      <h1><a ahref="/">Title</a></h1>
      <ul classNmae="nav-list"></ul>
      <li>
        <NavLink to="/">홈</NavLink>
      </li>

      <li>
        <NavLink to="/about">소개</NavLink>
      </li>

       <li>
        <NavLink to="/board">게시판리스트</NavLink>
      </li>


    </nav>
  )
}

export default Nav