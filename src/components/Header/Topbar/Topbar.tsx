"use client";
import React from "react";
import styled from "styled-components";
import { RiMap2Line } from "react-icons/ri";
interface TopbarProps {
  icon?: React.ReactNode;
  infoMessgae?: string;
}

const TopbarContainer = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.2rem;
  background-color: #666666;
`;

const IconContainer = styled.div`
  margin-right: 0.5rem;
`;

const Topbar: React.FC<TopbarProps> = ({ icon, infoMessgae }) => {
  return (
    <TopbarContainer>
      <IconContainer>{icon || <RiMap2Line />}</IconContainer>
      {infoMessgae}
    </TopbarContainer>
  );
};
export default Topbar;
