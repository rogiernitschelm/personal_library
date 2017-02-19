class OrderNotifier < ApplicationMailer

  default from: "Modern store <store@mail.com>"
  
  def received(order)
    @order = order

    mail to: order.email, subject: 'Your order'
  end

  def shipped(order)
    @order = order

    mail to: order.email, subject: 'Order shipped'
  end
end
