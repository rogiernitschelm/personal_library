require 'rails_helper'

# Testing the routes

RSpec.describe LanguagesController, type: :routing do
  describe "routing" do

    # Languages-routes

    it "routes to #index" do
      expect(:get => "/").to route_to("languages#index")
    end

    it "routes to #create" do
       expect(:post => "/languages").to route_to("languages#create")
    end

    it "routes to #new" do
      expect(:get => "/languages/new").to route_to("languages#new")
    end

    it "routes to #edit" do
      expect(:get => "/languages/1/edit").to route_to("languages#edit", id: "1")
    end

    it "routes to #show" do
      expect(:get => "/languages/1").to route_to("languages#show", id: "1")
    end

    it "routes to #update" do
      expect(:patch => "/languages/1").to route_to("languages#update", id: "1")
    end

    # Tutorials-routes

    it "routes to #create" do
       expect(:post => "/tutorials").to route_to("tutorials#create")
    end

    it "routes to #edit" do
      expect(:get => "/tutorials/1/edit").to route_to("tutorials#edit", id: "1")
    end

    it "routes to #new" do
      expect(:get => "/tutorials/new").to route_to("tutorials#new")
    end

    it "routes to #show" do
      expect(:get => "/tutorials/1").to route_to("tutorials#show", id: "1")
    end

    it "routes to #update" do
      expect(:patch => "/tutorials/1").to route_to("tutorials#update", id: "1")
    end

  end
end
