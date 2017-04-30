require 'rails_helper'

RSpec.describe LanguagesController, type: :controller do

  # index

  describe "GET #index" do
    let(:language) { FactoryGirl.create(:language)}
    before do
      get :index
    end

    context "when sending index#get request" do
       it { is_expected.to respond_with 200 }
       it { is_expected.to render_template("index") }
    end

  end

  # show

  describe "GET #show" do
    let(:language) { FactoryGirl.create(:language)}
    before do
      get :show, id: language.id
    end

    context "when sending show#get request" do
      it { is_expected.to respond_with 200 }
    end

  end

  # new

  describe "GET #new" do
    before do
      get :new
    end

    context "when sending new#get request" do
      it { is_expected.to respond_with 200}
      it { is_expected.to render_template("new")}
    end
  end

  # create

  describe "POST #create" do
    let(:language) { FactoryGirl.create(:language)}

    it "will have a name" do
      expect(language.name).to_not eq(nil)
    end

    it "will be valid" do
      expect(language).to be_valid
    end

    it "creates a language" do
      expect do
        post :create, {language: {name: "baa", description: "boo"}}
      end.to change{Language.count}.by(1)
    end

    it "does not create without description" do
      expect do
        post :create, {language: {name: "ba"}}
      end.to change{Language.count}.by(0)
    end

    it "does not create without name" do
      expect do
        post :create, {language: {description: "ba"}}
      end.to change{Language.count}.by(0)
    end
  end

  # edit

  describe "GET #edit" do
    let(:language) { FactoryGirl.create(:language)}
    before do
      get :edit, id: language.id
    end

    it "gets edit" do
      assert_response :success
    end

    it "returns http success" do
      expect(response.status).to eq(200)
    end

    it "renders the edit template" do
      expect(response).to render_template("edit")
    end
  end

  # update

  describe "PATCH #update" do
    let(:language) { FactoryGirl.create(:language)}
    before do
      patch :update, id: language.id, language: {name: "baba"}
    end

    it "redirects after update" do
      assert_response :redirect
    end

    it "returns http success" do
      expect(response.status).to eq(302)
    end
  end

end
