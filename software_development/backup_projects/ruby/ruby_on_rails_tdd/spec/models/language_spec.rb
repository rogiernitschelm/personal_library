require 'rails_helper'

RSpec.describe Language, type: :model do

  describe "create a language" do

    context "when checking validity" do
      it { is_expected.to validate_presence_of :name}
      it { is_expected.to validate_presence_of :description}
      it { is_expected.to have_many :tutorials}
    end

    context "when checking all languages" do
      subject {Language.all}
      it { is_expected.to eq([])}
    end

    context "when checking validity of language" do
      before {@language = FactoryGirl.create(:language) }
      subject {@language}
      it { is_expected.to be_valid }
    end

    context "when checking the languages' array" do
      before {@language = FactoryGirl.create(:language) }
      subject {Language.all}
      it { is_expected.to eq([@language])}
    end

  end

end
