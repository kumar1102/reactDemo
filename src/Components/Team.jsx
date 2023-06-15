import React, { useState } from "react";
import EmployeeCard from "./EmployeeDetails";
import styled from "styled-components";

const TeamContainer = styled.div`
  background-image: url("https://images.pexels.com/photos/1198171/pexels-photo-1198171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-size: cover;
  background-position: center;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(50px);
`;

const TeamHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
`;

const EmployeeList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const EmployeeCardWrapper = styled.div`
  flex-basis: 30%;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Team = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const techTeam = {
    name: "Tech Team",
    employees:  [
      {
        name: "Gopi Kartheek",
        picture:
          "https://arthmategroup.keka.com/files/b8a7fe08-dfad-45bb-b4e8-37a741f725f6/200x200/profileimage/8d714ee5cfe6483289f8d269f9af1c54.jpg",
        position: "SDE",
        department: "Technology",
        email: "gopi.kartheek@arthmate.co.in",
        phone: 9381272954,
      },
      {
        name: "Prarabdha Soni",
        picture:
          "https://arthmategroup.keka.com/files/b8a7fe08-dfad-45bb-b4e8-37a741f725f6/200x200/profileimage/cddd7077526a4e3397e7732695afaf11.jpeg",
        position: "SDE-2",
        department: "Technology",
        email: "prarabdha.soni@arthmate.co.in",
        phone: 8118898113,
      },
      {
        name: "Shivani Gupta",
        picture:"https://arthmategroup.keka.com/files/b8a7fe08-dfad-45bb-b4e8-37a741f725f6/200x200/profileimage/92d6f5cbd6124fcab53e8474928d1e48.jpeg",       
        position: "SDE-2",
        department: "Technology",
        email: "shivani.gupta@arthmate.co.in",
        phone: 9630508256,
      },
      {
        name: "Shashank Negi",
        picture:"https://arthmategroup.keka.com/files/b8a7fe08-dfad-45bb-b4e8-37a741f725f6/200x200/profileimage/c09dd763f1fe4bb7a92b464d23115f7f.jpg",
        position: "SDE",
        department: "Technology",
        email: "shashank.negi@arthmate.co.in",
        phone: 8954832290,
      },
    ],
  };
  const HumanResource = {
    name: "Human Resource",
    employees: [
      {
        name: "Ashish Gulati",
        picture:
          "https://arthmategroup.keka.com/files/b8a7fe08-dfad-45bb-b4e8-37a741f725f6/200x200/profileimage/c43e50b6423547648e2720f93c3f7e63.jpg",
        position: "Senior Manager",
        department: "Human Resources",
        email: "ashish.gulati@arthmate.com",
        phone:9599655574,
      },
      {
        name: "Shruti Arora",
        picture:
          "https://arthmategroup.keka.com/files/b8a7fe08-dfad-45bb-b4e8-37a741f725f6/200x200/profileimage/ffbaf86609204c6c90b4cbd6427645d1.jpg",
        position: "Head - HR - Vice President",
        department: "Human Resources",
        email: "shruti.arora@arthmate.com",
        phone: 9999077010,
      },
      {
        name: "Sajal Omar",
        picture:"https://arthmategroup.keka.com/files/b8a7fe08-dfad-45bb-b4e8-37a741f725f6/200x200/profileimage/a78b16ace8ef42afb8e95c7c5eaf0391.jpg",       
        position: "Senior Executive",
        department: "Human Resources",
        email: "sajal.omar@arthmate.com",
        phone: 9935157274,
      },
    ],
  };

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <TeamContainer >
      <TeamHeading style={{color:'white'}}>{techTeam.name}</TeamHeading>
      <EmployeeList style={{color:'white'}}>
        {techTeam.employees.map((employee) => (
          <EmployeeCardWrapper
            key={employee.email}
            onClick={() => handleEmployeeClick(employee)}
          >
            <EmployeeCard employee={employee} showDetails={false} />
          </EmployeeCardWrapper>
        ))}
      </EmployeeList>
      <hr style={{color:'white'}}/>
      <TeamHeading style={{color:'white'}}>{HumanResource.name}</TeamHeading>
      <EmployeeList style={{color:'white'}}>
        {HumanResource.employees.map((employee) => (
          <EmployeeCardWrapper
            key={employee.email}
            onClick={() => handleEmployeeClick(employee)}
          >
            <EmployeeCard employee={employee} showDetails={false} />
          </EmployeeCardWrapper>
        ))}
      </EmployeeList>
    </TeamContainer>
  );
};

export default Team;
