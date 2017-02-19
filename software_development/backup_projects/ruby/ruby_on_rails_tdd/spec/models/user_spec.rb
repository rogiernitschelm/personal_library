require 'rails_helper'

RSpec.describe User, type: :model do
  describe "create a User" do

    context "when checking validity" do
      it { is_expected.to validate_presence_of :email}
      it { is_expected.to validate_presence_of :password}
    end

    context "when checking all users" do
      subject {User.all}
      it { is_expected.to eq([])}
    end

    context "when checking validity of tutorial" do
      before {@user = FactoryGirl.create(:user) }
      subject {@user}
      it { is_expected.to be_valid }
    end

    context "when checking the users' array" do
      before {@user = FactoryGirl.create(:user) }
      subject {User.all}
      it { is_expected.to eq([@user])}
    end

  end
end
