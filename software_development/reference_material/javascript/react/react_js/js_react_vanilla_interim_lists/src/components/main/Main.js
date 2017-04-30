import React from 'react';
import FavoriteList from './favorite_list/FavoriteList';
import JobList from './job_list/JobList';
import MessageSystem from './message_system/MessageSystem';
import News from './news/News';
import EmployerList from './employer_list/EmployerList';
import FreelancerList from './freelancer_list/FreelancerList';

const Main = (props) => {

  return(
    <main>
      <JobList jobs={props.jobs} />
      <EmployerList employers={props.employers} />
      <FreelancerList freelancers={props.freelancers} />
    </main>
  )
}

export default Main;
