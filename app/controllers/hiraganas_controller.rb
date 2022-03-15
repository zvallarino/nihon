class HiraganasController < ApplicationController

  def index
    hiraganas = Hiragana.all
    render json: hiraganas,status:200
  end 

end
