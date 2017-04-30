require 'rails_helper'

RSpec.describe FreelancersController, type: :routing do
  describe "routing" do

    # Freelancers-routes

    # it "routes to #create" do
    #    expect(:post => "/freelancers").to route_to("freelancers#create")
    # end
    #
    # it "routes to #new" do
    #   expect(:get => "/freelancers/new").to route_to("freelancers#new")
    # end

    it "routes to #edit" do
      expect(:get => "/freelancers/1/edit").to route_to("freelancers#edit", id: "1")
    end

    it "routes to #show" do
      expect(:get => "/freelancers/1").to route_to("freelancers#show", id: "1")
    end

    it "routes to #update" do
      expect(:patch => "/freelancers/1").to route_to("freelancers#update", id: "1")
    end

  end
end
