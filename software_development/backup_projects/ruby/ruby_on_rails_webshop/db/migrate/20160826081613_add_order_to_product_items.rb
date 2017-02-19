class AddOrderToProductItems < ActiveRecord::Migration
  def change
    add_reference :product_items, :order, index: true
    add_foreign_key :product_items, :orders
  end
end
