FactoryGirl.define do
  factory :tutorial do
    title         { Faker::Name.title }
    description  { Faker::Name.name }
  end
end
