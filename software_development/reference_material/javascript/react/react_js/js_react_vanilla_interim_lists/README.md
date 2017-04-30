# InterimAgenda React front-end

React template for the interimAgenda front-end.

## Models

The current models in this application are Jobs, Freelancers and Employers.
Both Freelancers and Employers inherit from the User-class.

The components for these models are made separately, though initially they will
look much alike. I could've used one component with different models to load the
data from, but that would make the rendering unnecessarily complex. It would
also mean alot of refactoring in the future, as the view of jobs, freelancers
and employers will start evolving pretty rapidly. 
