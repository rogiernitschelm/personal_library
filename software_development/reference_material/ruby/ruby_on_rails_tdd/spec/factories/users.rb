FactoryGirl.define do
  factory :user do
    email         "myemail@mail.mail"
    user_name         "ruby"
    description  "some description"
    gender        "male"
    birth_date    "01-01-1988"
    password      "abcd1234!"
  end

end
