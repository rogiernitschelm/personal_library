class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  acts_as_messageable

  # ALWAYS: there should always be a first and last name.
  validates_presence_of :first_name, :last_name

  # ON CREATE: on create (and only on create) should there be a user-type.
  validates_presence_of :type, on: :create

  validates_presence_of :gender, on: :update

  # ON UPDATE: common attributes for both employers and freelancers
  validates_presence_of :description, on: :update

  validates_presence_of :business, on: :update

  def mailboxer_email(object)
    email
  end

  def self.types
    %w(Employer Freelancer)
  end

  def self.business
    %w(Banking Insurance Engineering IT Finance Legal Marketing Sales Communication
    HR Healthcare Administration Government Construction Industry)
  end
end
