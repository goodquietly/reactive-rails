class Contact < ApplicationRecord
  scope :sorted, -> { order(:email) }

  validates :name, :email, presence: true
  validates :email, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
end
