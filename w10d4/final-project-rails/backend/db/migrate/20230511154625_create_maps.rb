class CreateMaps < ActiveRecord::Migration[6.1]
  def change
    create_table :maps do |t|
      t.string :title
      t.string :description
      t.string :latitude
      t.string :longitude

      t.timestamps
    end
  end
end
