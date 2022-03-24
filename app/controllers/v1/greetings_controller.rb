class V1::GreetingsController < ApplicationController
  def index
    greetings = Greeting.all.sample
    render json: { greetings: }.to_json
  end
end
