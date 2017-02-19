require 'rails_helper'

RSpec.describe JobsController, type: :routing do
  describe "routing" do

    # Jobs-routes

    it "routes to #create" do
       expect(:post => "/jobs").to route_to("jobs#create")
    end

    it "routes to #new" do
      expect(:get => "/jobs/new").to route_to("jobs#new")
    end

    it "routes to #edit" do
      expect(:get => "/jobs/1/edit").to route_to("jobs#edit", id: "1")
    end

    it "routes to #show" do
      expect(:get => "/jobs/1").to route_to("jobs#show", id: "1")
    end

    it "routes to #update" do
      expect(:patch => "/jobs/1").to route_to("jobs#update", id: "1")
    end

  end
end
