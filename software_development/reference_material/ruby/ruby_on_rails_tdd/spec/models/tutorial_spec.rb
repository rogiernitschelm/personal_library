require 'rails_helper'

RSpec.describe Tutorial, type: :model do
  describe "create a Tutorial" do

    context "when checking validity" do
      it { is_expected.to validate_presence_of :title}
      it { is_expected.to validate_presence_of :description}
      it { is_expected.to have_many :steps}
    end

    context "when checking all tutorials" do
      subject {Tutorial.all}
      it { is_expected.to eq([])}
    end

    context "when checking validity of tutorial" do
      before {@tutorial = FactoryGirl.create(:tutorial) }
      subject {@tutorial}
      it { is_expected.to be_valid }
    end

    context "when checking the tutorials' array" do
      before {@tutorial = FactoryGirl.create(:tutorial) }
      subject {Tutorial.all}
      it { is_expected.to eq([@tutorial])}
    end

  end
end
