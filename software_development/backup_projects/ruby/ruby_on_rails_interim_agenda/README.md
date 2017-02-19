# README

I am writing this to help a friend learn. I am just a newly started coder.

# step 1 (in the terminal >_)

>_ rails new InterimAgenda -d postgresql -T

// this creates a new application-project
// -d postgresql means we will use a postgres database instead of mysql
// -T means we will skip the basic testing stuff rails usually adds.


# step 2 (in the terminal >_)

>_ cd InterimAgenda


# step 3

Open the file with the name 'Gemfile'

add the following:

gem 'devise'          // this is used for user-authentication (login/register)

// We do this to ensure that we include the module(gem) to our application


# step 4 (in the terminal >_)

>_ bundle install
>_ rails generate devise:install      (with a colon)
>_ rails generate devise User         (without the colon)
>_ rails generate devise:views        (with a colon)

// bundle install -> installs all modules(gems)
// devise:install -> installs devise inside our application
// devise User    -> creates a User model with the devise-features
// devise:views   -> creates the views for devise (like registration/login)

! instead of rails generate you can type rails g


# step 5 (in the terminal >_)

>_ rails g model Employer company_name:string head_office:location description:text

// now we create the Employer-model. Initially we will settle with just 3 attributes.
// the second property like string or text are used to declare the datatype.
// strings are small texts (like an SMS)
// text is for larger texts (like a profile description)

! instead of typing company_name:string, company_location:string, you can just type:
company_name company_location. If you do not give a property like string/text/integer/date
it will assume that it must be a string.


# step 6 (in the terminal >_)

>_ rails g model Freelancer first_name last_name birth_date:date gender

// now we create the Freelancer model. We want first and last name to be a string
// so we don't pass in anything. Birthdate should be a date, so we pass it a date.
// Gender should also be a string.


# step 7 (in the terminal >_)

>_ rake db:migrate

// we create a migration. Rake stands for "Rails make". A migration is a snapshot
// of the database. We create a new snapshot because we added new models and thus
// the database should now be updated. Thats why we use rake db:migrate.

! >_ rake db:reset      // resets the database
! >_ rake db:drop       // drops the database


# step 8 (in the terminal >_)

go to InterimAgenda/app/controllers
>_ touch employers_controller.rb
>_ touch jobs_controller.rb
>_ touch freelancers_controller.rb

// now we made three controllers which we will have to specify next


# step 9 (in terminal >_)

we haven't made a Job-model yet. So we have to do that now.
>_ rails g model Job title start_date:date employer:references

// now we made a job-model that refers to employer.


# step 10

Go to InterimAgenda/app/models/employer.rb
add the following line right underneath the class-definition:
has_many :jobs

// this creates a relation between employer and jobs. Rails will translate this
// to SQL (so we don't have to).


# step 11 (in terminal >_)

>_ mkdir app/views/freelancers
>_ mkdir app/views/jobs
>_ mkdir app/views/employers

>_ touch app/views/freelancers/index.html.erb
>_ touch app/views/jobs/index.html.erb
>_ touch app/views/employers/index.html.erb

>_ touch app/views/freelancers/show.html.erb
>_ touch app/views/jobs/show.html.erb
>_ touch app/views/employers/show.html.erb

// we created several views. One for the freelancers, employers and jobs.


# step 12 (in terminal >_)

>_ rake db:migrate        // because we made a new job-model


# step 13

Go to InterimAgenda/app/controllers
Open employers_controller.rb
Add the following:

###
class EmployersController < ApplicationController

  def index
    @employers = Employer.all
  end

  def show
    @employer = Employer.find(params[:id])
  end

end
###

// Do the same with the other controllers. BUT rename
// employer(s) and Employer to the corresponding model.


# step 14

Go to InterimAgenda/config/routes.rb

add the following routes (inside Rails.application.routes.draw.do):

root 'employers#index'

get 'employers/index' => 'employers#index'
get 'employers/:id' => 'employers#show', as: :employer

get 'freelancers/index' => 'freelancers#index'
get 'freelancers/:id' => 'employers#show', as: :freelancer

get 'jobs/index' => 'jobs#index'
get 'jobs/:id' => 'jobs#index', as: :job

# step 15
