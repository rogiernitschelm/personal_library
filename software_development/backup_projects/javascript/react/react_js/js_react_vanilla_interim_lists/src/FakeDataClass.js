// Freelancer < User

// email
// type
// first_name
// last_name
// birth_date (date)
// gender
// education (text)
// business
// field
// description (text)
// availability
// pay_rate (int)

// reset_passaword_token
// reset_password_sent_at
// remember_created_at
// sign_in_count
// current_sign_in_ip
// last_sign_in_ip


// Employers < User

// email
// type
// first_name
// last_name
// company_name
// birth_date (date)
// business
// description

// reset_passaword_token
// reset_password_sent_at
// remember_created_at
// sign_in_count
// current_sign_in_ip
// last_sign_in_ip

// Jobs

// job_title
// start_date (date)
// employer_id (reference)
// offered_pay_rate (int)
// job_description (text)

// created_at
// updated_at

class FakeDataClass {
  constructor(){
    this.id = Math.floor((Math.random() * 99999) + 1);
    this.email = "testEmployee@mail.com";
    this.first_name = "testFirstName";
    this.last_name = "testLastName";
    this.company_name = "testCompanyName";
    this.job_title = "testJobTitle";
    this.description = "Some awesome and really nice description about nothing.";
    this.availability = "Available"  ;
    this.business = "someBusiness";
    this.field = "SomeField";
    this.location = "somePlace";
  }
}

export default FakeDataClass;
