import React from 'react';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <a class="btn btn-ghost normal-case text-xl" href="s">
                    Momento
                </a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0  font-bold">
                    <li tabindex="0">
                        <li>Home</li>
                        <li> About</li>
                        <li>Collection</li>
                        <li>Page</li>
                        <li>Cantact</li>
                    </li>
                </ul>
            </div>
            <div class="navbar-end">
                <div className="btn bg-orange-000 hover:bg-orange-700">Join Now</div>
            </div>
        </div>
    );
};

export default Navbar;