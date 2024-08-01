import {
  web,
  scd,
  prob,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Bckend Developer Intern",
    company_name: "Infotech",
    date: "2024 - present",
    details: [
      "Explored all <span style='color: white;'>core JAVA concepts</span>  involves covering a wide range of fundamental topics that are essential for understanding and working with the Java programming language .",
      "Also familiar with <span style='color: white;'>JPA and Oracle</span>.",
    ],
  },
  {
    title: "Software Engineering fellow",
    company_name: "Headstarter AI",
    date: "2024 - present",
    details: [
      "Developed and delivered custom interdisciplinary coding portfolio with <span style='color: white;'>3D Animations</span>.",
      "<span style='color: white;'>In progress of designing and developing innovative</span> AI applications and interactive websites.",
    ],
  },

];

const portfolio = [
  {
    name: "Event Management System",
    description:
      "An Event Management System (EMS) built on the MERN stack (MongoDB, Express.js, React, Node.js) is a web application designed to facilitate the creation, organization, and management of events.",
    image: web,
  },
  {
    name: "Survival Analysis and Predictive Modelling on Titanic",
    description:
      "Predictive analysis on the Titanic dataset using R involves using statistical and machine learning techniques to predict the survival of passengers based on various features.",
    image: prob,
  },
  {
    name: "Encyclopedia of Arabic Poems",
    description:
      "The Encyclopedia of Arabic Poems is a Java-based application designed to store and retrieve information about Arabic poems. It will support features like adding new poems, searching poems by various criteria, displaying poem details, and managing user accounts.",
    image: scd,
  },
];

export { experiences, portfolio };

