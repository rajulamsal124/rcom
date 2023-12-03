'use client'
import { ChangeEvent } from "react";
import styled from "styled-components"

interface NavBarProps {
    logo?: React.ReactNode;
    onSearchChange?: (value: string) => void;
    onSearchSubmit?: () => void;
    searchPlaceholder?: string;
    searchValue?: string;
    rightMenuIcons?: React.ReactNode[]; 
}

const NavBarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 15vh;
background-color: #f3f3f3;
color: #000;`;

const Logo= styled.div`
height: 50%;
width: 50%;
font-size: 2.5rem;
padding: 0 6rem;
flex: 0 0 10%;
`;
const SearchBar= styled.input`
flex: 1;
height: 3.5rem;
border: none;
border-radius: 2rem;
padding: 0 5rem;
font-size: 1.2rem;

&:hover::placeholder {
    color: #a9a9a9;
}
`;
const SearchIcon = styled.div`
margin: 0 1rem;
 color: #a9a9a9;
`;
const RightMenuIcons= styled.div`
display: flex;
align-items: center;
color: #6b7280;
font-size: 1.5rem;
flex: 0 0 10%;
justify-content: flex-end;
padding: 1rem 6rem;
`;

const IconWrapper= styled.div`
margin: 0 0.8rem;
&:hover {
    color: #a9a9a9;
}
`;


const NavBar: React.FC<NavBarProps> = ({
    logo,
    onSearchChange,
    onSearchSubmit,
    searchPlaceholder="Search products & brands",
    searchValue,
    rightMenuIcons
}) => {
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (onSearchChange) {
          onSearchChange(event.target.value);
        }
      };
      return (
        <>
            <NavBarContainer>
                <Logo>{logo}</Logo>
                <SearchBar
                    placeholder={searchPlaceholder}
                    value={searchValue}
                    onChange={handleSearchChange} />
                <RightMenuIcons>
                    {rightMenuIcons?.map((icon, index) => (<IconWrapper key={index}>{icon}</IconWrapper>))}
                </RightMenuIcons>
            </NavBarContainer>
            </>
            
      )
}
export default NavBar;