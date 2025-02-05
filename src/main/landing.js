import React from 'react';
import {chevronLeft, chevronRight} from 'lucide-react';

const [currentSlide, setCurrentSlide] = React.useState(0);

const tecnologias = [
    { nombre: "HTML5", color: "bg-orange-500" },
    { nombre: "CSS3", color: "bg-blue-500" },
    { nombre: "JavaScript", color: "bg-yellow-500" },
    { nombre: "React", color: "bg-blue-400" },
    { nombre: "Tailwind", color: "bg-teal-500" },
  ];