import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders robotics portfolio heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /robotics portfolio/i });
  expect(headingElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  const projectsLink = screen.getByRole('link', { name: /^projects$/i });
  const skillsLink = screen.getByRole('link', { name: /^skills$/i });
  const aboutLink = screen.getByRole('link', { name: /^about$/i });
  const contactLink = screen.getByRole('link', { name: /^contact$/i });
  
  expect(projectsLink).toBeInTheDocument();
  expect(skillsLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});
