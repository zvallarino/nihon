class HiraganaSerializer < ActiveModel::Serializer
  attributes :id, :character, :soundAlpha, :soundFile, :category, :categoryHorz
end
