require 'rails_helper'

RSpec.describe Step, type: :model do
  describe "create a Step" do

    context "when checking validity" do
      it { is_expected.to validate_presence_of :step_number}
      it { is_expected.to validate_presence_of :description}
      it { is_expected.to validate_presence_of :code}
    end

    context "when checking all steps" do
      subject {Step.all}
      it { is_expected.to eq([])}
    end

    context "when checking validity of step" do
      before {@step = FactoryGirl.create(:step) }
      subject {@step}
      it { is_expected.to be_valid }
    end

    context "when checking the steps' array" do
      before {@step = FactoryGirl.create(:step) }
      subject {Step.all}
      it { is_expected.to eq([@step])}
    end

  end
end
