require 'rails_helper'

RSpec.describe TutorialsController, type: :controller do

  # index

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response.status).to eq(200)
    end

    it "renders the index template" do
      get :index
      expect(response).to render_template("index")
    end

    it "assigns tutorials" do
      tutorial = Tutorial.create
      get :index
      expect(assigns(:tutorials.length)).to_not eq(0)
    end

  end

  # show

  describe "GET #show" do
    let(:tutorial) { FactoryGirl.create(:tutorial)}
    before do
      get :show, id: tutorial.id
    end
    it "returns http success" do
      expect(response).to have_http_status(:success)
    end
  end

  # new

  describe "GET #new" do
    before do
      get :new
    end

    it "gets new" do
      assert_response :success
    end

    it "returns http success" do
      expect(response.status).to eq(200)
    end

    it "renders the new template" do
      expect(response).to render_template("new")
    end
  end

  # create

  describe "POST #create" do
    let(:tutorial) { FactoryGirl.create(:tutorial)}

    it "will have a title" do
      expect(tutorial.title).to_not eq(nil)
    end

    it "does not create without description" do
      expect do
        post :create, {tutorial: {title: "ba"}}
      end.to change{Tutorial.count}.by(0)
    end

    it "creates a tutorial" do
      expect do
        post :create, {tutorial: {title: "baa", description: "boo"}}
      end.to change{Tutorial.count}.by(1)
    end

    it "does not create without title" do
      expect do
        post :create, {tutorial: {description: "ba"}}
      end.to change{Tutorial.count}.by(0)
    end
  end

  # edit

  describe "GET #edit" do
    let(:tutorial) { FactoryGirl.create(:tutorial)}
    before do
      get :edit, id: tutorial.id
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
    let(:tutorial) { FactoryGirl.create(:tutorial)}
    before do
      patch :update, id: tutorial.id, tutorial: {title: "wow a new title nice!"}
    end

    it "redirects after update" do
      assert_response :redirect
    end

    it "returns http success" do
      expect(response.status).to eq(302)
    end
  end
end
