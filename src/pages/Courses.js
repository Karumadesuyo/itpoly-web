import React from 'react';
import styled from 'styled-components';

const CourseWrapper = styled.section`
  padding: 50px;
  background-color: #f4f4f4;
  text-align: center;
`;

const CourseTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const CourseCard = styled.div`
  background-color: white;
  padding: 20px;
  margin: 10px;
  display: inline-block;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CourseSummary = () => {
  return (
    <CourseWrapper>
      <CourseTitle>Our Courses</CourseTitle>
      <div>
        <CourseCard>
          <h3>Engineering</h3>
          <p>Hands-on training in engineering technologies.</p>
        </CourseCard>
        <CourseCard>
          <h3>Design</h3>
          <p>Develop creative skills in design and multimedia.</p>
        </CourseCard>
        <CourseCard>
          <h3>Business</h3>
          <p>Learn the fundamentals of business and management.</p>
        </CourseCard>
      </div>
    </CourseWrapper>
  );
};

export default CourseSummary;
