require 'rails_helper'

RSpec.describe StepsController, type: :controller do

  # index

  describe "GET #index" do
    let(:step) { FactoryGirl.create(:step)}
    before do
      get :index
    end

    context "when sending index#get" do
      it {is_expected.to respond_with 200}
      it {is_expected.to render_template("index")}
    end

  end

  # show

  describe "GET #show" do
    let(:step) { FactoryGirl.create(:step)}
    before do
      get :show, id: step.id
    end

    context "when sending index#get request" do
      it { is_expected.to respond_with 200 }
      it { is_expected.to render_template("show")}
    end
  end

  # new

  describe "GET #new" do
    before do
      get :new
    end

    context "when sending new#get request" do
      it { is_expected.to respond_with 200 }
      it { is_expected.to render_template("new")}
    end

  end

  # create

  describe "POST #create" do
    let(:step) { FactoryGirl.create(:step)}

    it "will have a step_number" do
      expect(step.step_number).to_not eq(nil)
    end

    it "will be valid" do
      expect(step).to be_valid
    end

    it "creates a step" do
      expect do
        post :create, {step: {step_number: 3, description: "boo", code: "baabaa"}}
      end.to change{Step.count}.by(1)
    end

    it "does not create without description" do
      expect do
        post :create, {step: {step_number: 3, code: "baabaa"}}
      end.to change{Step.count}.by(0)
    end

    it "does not create without step_number" do
      expect do
        post :create, {step: {description: "ba"}}
      end.to change{Step.count}.by(0)
    end
  end

  # edit

  describe "GET #edit" do
    let(:step) { FactoryGirl.create(:step)}
    before do
      get :edit, id: step.id
    end

    context "when requesting edit#get" do
      it { is_expected.to respond_with 200}
      it { is_expected.to render_template("edit")}
    end
  end

  # update

  describe "PATCH #update" do
    let(:step) { FactoryGirl.create(:step)}
    before do
      patch :update, id: step.id, step: {step_number: 123123}
    end

    context "when requesting update#patch" do
      it {is_expected.to redirect_to(@steps)}
      it {is_expected.to respond_with 302}
    end

  end

  # destroy

  describe "DELETE #destroy" do
    subject(:step){ FactoryGirl.create(:step) }
    before { step }

    it "destroys the step" do
      expect do
        delete :destroy, id: step
      end.to change{Step.count}.by(-1)
    end
  end
end
