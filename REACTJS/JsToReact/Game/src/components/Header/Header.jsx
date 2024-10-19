import React, { useEffect } from 'react';
import $ from 'jquery'; // Make sure to install jQuery if you haven't
import "./Header.css";

function Header() {
    useEffect(() => {
        // Initialize the horizontal selector
        const tabsNewAnim = $('#navbar-animmenu');
        const activeItemNewAnim = tabsNewAnim.find('.active');
        const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        const itemPosNewAnimLeft = activeItemNewAnim.position();

        $(".hori-selector").css({
            "left": itemPosNewAnimLeft.left + "px",
            "width": activeWidthNewAnimWidth + "px"
        });

        // Handle click events
        $("#navbar-animmenu").on("click", "li", function() {
            $('#navbar-animmenu ul li').removeClass("active");
            $(this).addClass('active');
            const activeWidthNewAnimWidth = $(this).innerWidth();
            const itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                "left": itemPosNewAnimLeft.left + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
        });

        // Cleanup the event listener on component unmount
        return () => {
            $("#navbar-animmenu").off("click", "li");
        };
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div id="navbar-animmenu">
            <ul className="show-dropdown main-navbar">
                <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                <li>
                    <a href="javascript:void(0);"><i className="fas fa-tachometer-alt"></i>Dashboard</a>
                </li>
                <li className="active">
                    <a href="javascript:void(0);"><i className="far fa-address-book"></i>Address Book</a>
                </li>
                <li>
                    <a href="javascript:void(0);"><i className="far fa-clone"></i>Components</a>
                </li>
                <li>
                    <a href="javascript:void(0);"><i className="far fa-calendar-alt"></i>Calendar</a>
                </li>
                <li>
                    <a href="javascript:void(0);"><i className="far fa-chart-bar"></i>Charts</a>
                </li>
                <div className="logo">
                    <img src="" alt="" className="logo" />
                </div>
            </ul>
        </div>
    );
}

export default Header;