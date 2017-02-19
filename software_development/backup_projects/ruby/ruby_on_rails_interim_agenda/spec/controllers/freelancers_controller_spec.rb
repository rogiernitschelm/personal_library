require 'rails_helper'

RSpec.describe FreelancersController, type: :controller do
  describe "GET #index" do
     let(:freelancer) { FactoryGirl.create(:freelancer)}
     before do
       get :index
     end

     context "when sending index#get request" do
        it { is_expected.to respond_with 200 }
        it { is_expected.to render_template("index") }
     end
   end
 end
