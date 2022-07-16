import React from 'react';
import styled from 'styled-components';

// Components
import SiteLogo from 'UI/common/SiteLogo.jsx';
import MainMenu from '../Menus/MainMenu.jsx';
import ClassMenu from '../Menus/ClassMenu.jsx';

const MediumLargeView = () => {
    return (
        <MediumLargeViewStyled className='MediumLargeView'>
            <div className="inset">
                <div className="logo">
                    <SiteLogo />
                </div>
                <div className="menus">
                    <MainMenu />
                    <ClassMenu />
                </div>
            </div>
        </MediumLargeViewStyled>
    );
}

export default MediumLargeView;

const MediumLargeViewStyled = styled.div`
    .inset {
        display: flex;
        position: relative;

        .logo {
            flex: 1;

            .SiteLogo {
                width: 80%;
                margin: auto;
                padding: 20px 0px;
            }
        }

        .menus {
            flex: 4;

            display: flex;
            justify-content: flex-end;
            align-items: flex-end;

            h2 { display: none;  }

            a {
                opacity: .8;
                color: #84d4d4;
                font-weight: bold;
                text-decoration: none;
                text-transform: uppercase;

                &:hover, &:active, &:focus {
                    opacity: 1;
                }
            }

            .MainMenu {
                padding: 0px 0px 20px 0px;
                display: flex;
                justify-content: flex-end;
                height: 50px;

                a {
                    width: 80px;
                    line-height: 30px;
                    text-align: center;
                    margin: 0px 0px 0px 5px;
                    font-size: 12px;

                    border-bottom: solid 3px #84d4d4;

                    &.active {
                        color: white;
                        border-bottom-color: white;
                    }
                }
            }

            .ClassMenu {
                position: absolute;
                right: 10px;
                top: 10px;

                a {
                    font-size: 12px;
                }
            }

        }
    }
`;